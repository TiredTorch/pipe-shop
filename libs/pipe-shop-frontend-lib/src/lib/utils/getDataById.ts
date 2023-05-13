import cardi from "../assets/tubes/Cardboard tube/Cardboard.png"
import cards from "../assets/tubes/Cardboard tube/Cardboard.mp3"
import ceramici from "../assets/tubes/Ceramic tube/Ceramic.png"
import ceramics from "../assets/tubes/Ceramic tube/Ceramic.mp3"
import clayi from "../assets/tubes/Clay tube/Clay.png"
import clays from "../assets/tubes/Clay tube/Clay.mp3"
import funnyi from "../assets/tubes/Funny tube/Funny.png"
import funnys from "../assets/tubes/Funny tube/Funny.mp3"
import glassi from "../assets/tubes/Glass tube/Glass.png"
import glasss from "../assets/tubes/Glass tube/Glass.mp3"
import marioi from "../assets/tubes/Mario tube/Mario.png"
import marios from "../assets/tubes/Mario tube/Mario.mp3"
import uraniumi from "../assets/tubes/NPP unit 4/Chernobyl.png"
import uraniums from "../assets/tubes/NPP unit 4/Chernobyl.mp3"
import plastici from "../assets/tubes/Plastic tube/plastic.png"
import plastics from "../assets/tubes/Plastic tube/Plastic.mp3"
import skeletoni from "../assets/tubes/Skeleton tube/Skeleton.png"
import skeletons from "../assets/tubes/Skeleton tube/Skeleton.mp3"
import carboni from "../assets/tubes/Unknown material/Unknown.png"
import carbons from "../assets/tubes/Unknown material/Unknown.mp3"
import bambooi from "../assets/tubes/Vietnam tube/Bamboo.png"
import bamboos from "../assets/tubes/Vietnam tube/Bamboo.mp3"
import aluminiumi from "../assets/tubes/aluminium tube/aluminium.png"
import aluminiums from "../assets/tubes/aluminium tube/aluminium.mp3"
import concretei from "../assets/tubes/concrete tube/concrete tube.png"
import concretes from "../assets/tubes/concrete tube/concrete tube.mp3"
import woodi from "../assets/tubes/wooden tube/wood.png"
import woods from "../assets/tubes/wooden tube/wood.mp3"

export const getDataById = (id: string) => {
	let data = {
		image: "",
		audio: ""
	}

	switch (id) {
		case "645e0bdf5560c906e74b37e1":
			data = {
				image: aluminiumi,
				audio: aluminiums
			}
			break;
		case "645e0ca25560c906e74b37e4":
			data = {
				image: cardi,
				audio: cards
			}
			break;
		case "645e0cd45560c906e74b37e5":
			data = {
				image: ceramici,
				audio: ceramics
			}
			break;
		case "645e0cf55560c906e74b37e6":
			data = {
				image: clayi,
				audio: clays
			}
			break;
		case "645e0d125560c906e74b37e7":
			data = {
				image: concretei,
				audio: concretes
			}
			break;
		case "645e0d705560c906e74b37e8":
			data = {
				image: funnyi,
				audio: funnys
			}
			break;
		case "645e0dda5560c906e74b37e9":
			data = {
				image: glassi,
				audio: glasss
			}
			break;
		case "645e0e035560c906e74b37ea":
			data = {
				image: marioi,
				audio: marios
			}
			break;
		case "645e0e225560c906e74b37eb":
			data = {
				image: uraniumi,
				audio: uraniums
			}
			break;
		case "645e0e505560c906e74b37ec":
			data = {
				image: plastici,
				audio: plastics
			}
			break;
		case "645e0e745560c906e74b37ee":
			data = {
				image: skeletoni,
				audio: skeletons
			}
			break;
		case "645e0e8e5560c906e74b37ef":
			data = {
				image: carboni,
				audio: carbons
			}
			break;
		case "645e0ed15560c906e74b37f1":
			data = {
				image: bambooi,
				audio: bamboos
			}
			break;
		case "645e0eff5560c906e74b37f2":
			data = {
				image: woodi,
				audio: woods
			}
			break;
		default:
			break;
	}

	return data
}
