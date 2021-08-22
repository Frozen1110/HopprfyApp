/** @format */

import React, {
  StyleSheet,
  Platform,
  Dimensions,
  PixelRatio,
  I18nManager,
} from "react-native";
import { Color, Constants, Styles } from "@common";

const { width, height, scale } = Dimensions.get("window");
const vw = width / 100;
const vh = height / 100;

export default StyleSheet.create({
  panelOne: {
    width: 300,
    position: "relative",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginLeft: 15,
  },
  nameOne: {
    fontSize: 12,
    width: 300,
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    color: "#212121",
    fontWeight: "600",
    marginTop: 8,
    fontFamily: Constants.fontFamilyBold,
  },
  description: {
    fontSize: 9,
    marginTop: 2,
    marginBottom: 4,
    marginLeft: 0,
    lineHeight: 16,
    textAlign: "left",
    color: "#555555",
    fontFamily: Constants.fontfamily,
  },
  time: {
    alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start",
    marginLeft: 0,
    marginRight: 8,
    color: "#29A4C9",
    fontSize: 9,
    marginTop: 4,
    fontFamily: Constants.fontfamily,
  },
  panelTwo: {
    position: "relative",
    width: 180,
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: 12,
    marginLeft: 15,
      marginRight: 15,   
  },
  imagePanelTwo: {
    position: "relative",
    backgroundColor: "#F6F6F8",
    width: 180,
    height: 150,
  },
  nameTwo: {
    fontSize: 15,
    width: 180,
    marginTop: 8,
    marginBottom: 4,
    fontFamily: Constants.fontFamilyBold,
    textAlign: I18nManager.isRTL ? "right" : "left",
    color: Color.Text,
  },
  panelTwoHigh: {
    position: "relative",
    width: 180,
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: 12,
    marginLeft: 15,
    backgroundColor: "white"
  },
  imagePanelTwoHigh: {
    position: "relative",
    width: 180,
    height: 220,
    backgroundColor: "#F6F6F8",
  },
  panelThree: {
    position: "relative",
    width: 120,
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginBottom: 6,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 3,
    overflow: "hidden",
  },
  imagePanelThree: {
    width: 120,
    height: 140,
    borderRadius: 3,
    alignSelf: "flex-start",
    backgroundColor: "#F6F6F8",
  },
  nameThree: {
    fontSize: 14,
    width: 120,
    marginTop: 8,
    lineHeight: Platform.OS == "android" ? 24 : 20,
    color: "#212121",
    fontFamily: Constants.fontFamilyBold,
    alignSelf: "flex-start",
  },
  descriptionThree: {
    fontSize: 9,
    marginTop: 2,
    marginBottom: 4,
    marginLeft: 0,
    lineHeight: 16,
    width: 118,
    textAlign: "left",
    color: "#555555",
    fontFamily: Constants.fontfamily,
  },
  panelMini: {
    width,
  },
  imageMini: {
    width,
    height: (height * 60) / 100,
    // resizeMode: 'cover',
  },
  panelCard: {
    width: width - 50,
    position: "relative",
    alignItems: "flex-start",
    justifyContent: "space-around",
    marginLeft: 15,
    marginBottom: 20,
    borderRadius: 3,
    overflow: "hidden",
  },
  imagePanelCard: {
    position: "relative",
    borderRadius: 3,
    flex: 1,
    height: 150,
    width: width - 50,
    backgroundColor: "#F6F6F8",
  },
  nameCard: {
    fontSize: 15,
    width: width - 50,
    alignSelf: "flex-start",
    backgroundColor: "transparent",
    color: "#212121",
    marginTop: 8,
    marginBottom: 6,
    fontFamily: Constants.fontFamilyBold,
  },
  descriptionCard: {
    fontSize: 9,
    marginTop: 0,
    marginBottom: 4,
    marginLeft: 0,
    lineHeight: 14,
    textAlign: "left",
    color: "#555555",
    fontFamily: Constants.fontfamily,
  },
  timeCard: {
    marginLeft: 0,
    marginRight: 8,
    color: "#29A4C9",
    fontSize: 8,
    marginTop: 4,
    fontFamily: Constants.fontFamily,
  },
  cardOneGradient: {
    width: 300,
    borderRadius: 8,
    height: 150,
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 9999,
    position: "absolute",
    left: 0,
    top: 0,
  },
  imagePanelOne: {
    position: "relative",
    flex: 1,
    height: 150,
    width: 300,
  },
  blurOne: {
    position: "absolute",
    height: height / 3 - 50,
    left: (width / 100) * 3,
    top: 20,
    alignSelf: "flex-start",
    zIndex: 9999,
  },
  nameLocation: {
    fontFamily: Constants.fontFamily,
    fontSize: 20,
    color: "#FFF",
    backgroundColor: "transparent",
    marginTop: 10,
    marginBottom: 10,
  },
  timeOne: {
    marginBottom: 10,
    marginTop: 4,
    marginLeft: 12,
    marginRight: 12,
    color: "#999",
    fontSize: 12,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  cardOneBottom: {
    flexDirection: "row",
    position: "absolute",
    height: 50,
    left: (width / 100) * 3,
    bottom: 20,
    alignSelf: "flex-start",
    zIndex: 9999,
  },
  readMore: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: 14,
    marginTop: 25,
    backgroundColor: "transparent",
    fontFamily: Constants.fontFamily,
  },
  iconReadMore: {
    marginTop: 18,
    marginLeft: 15,
  },
  timeTwo: {
    alignSelf: I18nManager.isRTL ? "flex-end" : "flex-start",
    color: "#999",
    fontSize: 10,
    marginTop: 4,
    fontFamily:
      Platform.OS != "android"
        ? Constants.fontFamily
        : Constants.fontHeaderAndroid,
  },
  panelTwoView: {
    position: "relative",
    width: width / 2 - 10,
    justifyContent: "space-around",
    marginBottom: 30,
  },
  imagePanelTwoView: {
    position: "relative",
    width: width / 2 - 30,
    height: width / 2,
    borderRadius: 7,
  },
  nameTwoView: {
    fontSize: 14,
    fontWeight: "600",
    width: width / 2 - 30,
    marginTop: 8,
    fontFamily:
      Platform.OS != "android"
        ? Constants.fontHeader
        : Constants.fontHeaderAndroid,
  },
  nameSubTwoView: {
    marginTop: 4,
    width: width / 2 - 30,
  },
  panelList: {
    backgroundColor: "#FFF",
    borderColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
  },
  imageList: {
    marginTop: 12,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: vw * 30,
    height: vw * 30 - 20,
    // resizeMode: 'cover',
    borderRadius: 2,
  },
  titleList: {
    width: vw * 65,
  },
  nameList: {
    fontSize: 14,
    marginLeft: 4,
    marginTop: 12,
    marginRight: 8,
    color: "#333",
    fontWeight: "400",
  },
  descriptionList: {
    fontSize: 12,
    marginTop: 4,
    marginRight: 8,
    color: "#333",
    fontWeight: "300",
  },
  timeList: {
    paddingRight: I18nManager.isRTL ? 8 : 0,
    color: "#999",
    fontSize: 11,
    marginBottom: 10,
    marginTop: 6,
    backgroundColor: "transparent",
  },
  category: {
    fontSize: 11,
    marginTop: 6,
    color: "#999",
  },
  panel: {
    position: "relative",
    paddingLeft: 8,
    paddingTop: 8,
  },
  imagePanel: {
    width: width / 3,
    height: width / 3 + 20,
    borderRadius: 3,
    marginRight: 0,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  name: {
    fontSize: 13,
    width: width / 3 - 10,
    marginLeft: 4,
    marginTop: 6,
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  cardNews: {
    marginTop: 4,
    marginRight: 8,
    marginBottom: 8,
    marginLeft: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 3 },
    height: width - 80,
    borderRadius: 2,
    elevation: 5,
  },
  cardView: {
    borderRadius: 2,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  largeImage: {
    width: width - 16,
    height: width - 120,
    // resizeMode: 'cover',
  },
  linearGradient: {
    height: 120,
    marginTop: -120,
    justifyContent: "flex-end",
  },
  newsTitle: {
    fontSize: 18,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20,
    color: "white",
    fontWeight: "400",
    textAlign: "left",
    backgroundColor: "transparent",
  },
  author: {
    color: "#999",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 12,
    marginRight: 12,
    marginBottom: 12,
    marginLeft: 20,
  },
  smCardNews: {
    marginTop: 4,
    marginRight: 0,
    marginBottom: 4,
    marginLeft: 8,
    width: width / 2 + 15,
    shadowColor: "#000",
    borderRadius: 3,
    elevation: 5,
    flexDirection: "column",
    position: "relative",
    height: vh * 30 + 132,
  },
  smImage: {
    width: width / 2,
    height: width / 2 - 100,
    // resizeMode: 'cover',
  },
  smTitle: {
    marginTop: 12,
    marginRight: 12,
    marginBottom: 12,
    marginLeft: 12,
    fontSize: 15,
  },
  smAuthor: {
    color: "#999",
    fontSize: 12,
    fontWeight: "300",
    marginTop: 0,
    marginLeft: 12,
    marginBottom: 8,
    position: "absolute",
    bottom: 12,
  },
  smDescription: {
    backgroundColor: "white",
    height: 100,
  },
  smShareIcons: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    paddingLeft: 4,
    bottom: 0,
    paddingTop: 5,
  },
  simpleDesc: {
    fontSize: 12,
    marginLeft: 4,
    marginTop: 10,
    marginRight: 8,
    color: "#333",
    fontWeight: "300",
  },
  simpleTitle: {
    fontSize: 16,
    marginLeft: 0,
    marginTop: 12,
    marginRight: 8,
    color: "#333",
    fontWeight: "400",
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
  simpleContent: {
    width: vw * 63,
    marginLeft: vw * 2,
  },
  simpleImage: {
    marginLeft: vw * 2,
    marginRight: vw * 2,
    marginTop: 12,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: vw * 31,
    height: vw * 25,
    // resizeMode: 'cover',
    borderRadius: 2,
  },
  fixHeart: {
    position: "absolute",
    top: 10,
    right: 5,
    zIndex: 9999,
  },
  nameSub: {
    color: "rgb(146, 146, 175)",
    fontSize: 12,
    alignSelf: "flex-start",
    width: width / 2,
    fontFamily: Constants.fontFamily,
  },
  priceSub: {
    fontFamily: Constants.fontFamilyLight,
  },
  wrapRating: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  ratingView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginRight: 10,
  },
  iconStar: {
    marginRight: 2,
  },
  countReview: {
    alignSelf: "flex-start",
  },
  countText: {
    fontSize: 12,
    fontFamily: Constants.fontFamily,
  },

  bannerGradient: {
    width,
    alignItems: I18nManager.isRTL ? "flex-end" : "flex-start",
    height: Constants.Window.headerHeight / 2,
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },

  bannerTitle: {
    marginTop: 12,
    marginRight: 12,
    marginBottom: 4,
    marginLeft: 12,
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: 22,
    fontWeight: "600",
    fontFamily: Constants.fontFamilyBold,
  },
  priceView: {
    flexDirection: "row",
    marginLeft: 10,
    paddingBottom: 10,
    backgroundColor: "transparent",
  },
  price: {
    marginTop: 0,
    marginBottom: 5,
    fontSize: 18,
    fontFamily: Constants.fontFamily,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  sale_price: {
    textDecorationLine: "line-through",
    fontSize: 14,
    marginTop: 5,
  },

  bannerView: {
    width: width - 42,
    borderRadius: 6,
    overflow: "hidden",
    backgroundColor: "#F6F6F8",
  },

  bannerViewShadow: {
    width: width - 42,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 2,
    borderRadius: 6,
    height: (height * 30) / 100,

    shadowOffset: { width: 0, height: 10 },
    shadowColor: "#000",
    backgroundColor: "transparent",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  bannerImage: {
    width: width - 42,
    borderRadius: 6,
    height: (height * 30) / 100,
    resizeMode: "contain",
  },
  bannerOverlay: {
    width: width - 42,
    alignItems: I18nManager.isRTL ? "flex-end" : "flex-start",
    height: (height * 10) / 100,
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },

  // for the banner high layout
  bannerHighView: {
    width: width * 0.7,
    borderRadius: 9,
    overflow: "hidden",
    backgroundColor: "#F6F6F8",
  },
  bannerHighShadow: {
    width: width * 0.7,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 2,
    borderRadius: 9,
    height: (height * 45) / 100,

    shadowOffset: { width: 3, height: 6 },
    shadowColor: "#59769C",
    backgroundColor: "transparent",
    shadowOpacity: 0.7,
    shadowRadius: 7,
    elevation: 5,
  },

  bannerHighImage: {
    width: width * 0.7,
    borderRadius: 6,
    height: (height * 45) / 100,
    resizeMode: "cover",
  },
  bannerOverlay: {
    width: width * 0.9,
    alignItems: I18nManager.isRTL ? "flex-end" : "flex-start",
    height: (height * 20) / 100,
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  bannerHighTitle: {
    marginTop: 12,
    marginRight: 12,
    marginBottom: 4,
    marginLeft: 12,
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: 24,
    width: width * 0.6,
    fontWeight: "600",
    fontFamily: Constants.fontFamilyBold,
  },
});
