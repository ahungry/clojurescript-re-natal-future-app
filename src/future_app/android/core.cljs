(ns future-app.android.core
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :as ajax :refer [GET]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [future-app.events]
            [future-app.subs]))

;; Try to interactively do something useful...
;; (use 'figwheel-sidecar.repl-api)
;; (start-figwheel! "android")
;; (cljs-repl)
;; (in-ns 'future-app.android.core)
;; (dispatch [:set-greeting "lolz"])

;; Setup stuff
;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl

;; General guide
;; https://github.com/gphilipp/react-native-with-clojurescript

(def ReactNative (js/require "react-native"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))

(def logo-img (js/require "./images/cljs.png"))

(defn alert [title]
  ;; (dispatch [:set-greeting "Clicked alert..."])
  ;; (toast "Yummy")
  (get-ip)
  ;; (.alert (.-Alert ReactNative) title)
  )

(defn toast [ip-address]
  (dispatch [:set-greeting "Received your IP!"])
  (.show (.-ToastAndroid ReactNative) (str ip-address) (.-LONG (.-ToastAndroid ReactNative)))
  )

;; (-> (js/fetch "http://10.0.3.2:3000/\" (clj->js {:method \"POST\"}))
;;     (.then #(.json %)) ;; warning: `.json` returns a promise that resolves to the parsed json body
;;     (.then js->clj)
;;     (.then yourhandlerhere)
;;     (.catch #(js/console.error %)))\"\"}\""))

;; http://cljs.info/cheatsheet/
(defn get-ip []
  (-> (js/fetch "https://httpbin.org/ip" (clj->js {:method "GET"}))
      (.then #(.json %))
      (.then js->clj)
      (.then #(toast %))
      (.catch #(toast "Failure fetching ip!")))
  ;; cljs.ajax fails: https://github.com/JulianBirch/cljs-ajax/issues/141
  ;; (GET "https://httpbin.org/ip"
  ;;      (:handler #(println "yay")
  ;;                :error-handler #(println "epic fail")))
  )

(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [image {:source logo-img
               :style  {:width 80 :height 80 :margin-bottom 30}}]
       [text {:style {:font-size 50 :text-align "center"}} "This is pretty dang cool."]
       [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                             :on-press #(alert "Very nice!")}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "go press me"]]])))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "FutureApp" #(r/reactify-component app-root)))
