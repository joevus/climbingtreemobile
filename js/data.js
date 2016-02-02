var treeData = {
	bigBr: {
		1: {
			name: "Science",
			medBr: {
				1: {
					name: "Space",
					leaf: {
						1: {
							siteTitle: "Kerbal Space",
							img: "kerbalspace",
							url: "kerbalspaceprogram.com",
							descrip: "Well-reviewed computer game for kids to learn about sending rockets to space."
						}
					}
				},
				2: {
					name: "Physics",
					leaf: {
						1: {
							siteTitle: "Veritasium",
							img: "veritasium",
							url: "https://www.youtube.com/user/1veritasium",
							descrip: "A great set of videos that discuss interesting concepts and developments in the field of physics."
						}
					}
				},
				3: {
					name: "Biology",
					leaf: {
						1: {
							siteTitle: "PhET Interactive Simulations",
							img: "phetinteractive",
							url: "http://phet.colorado.edu/en/simulations/category/new",
							descrip: "Contains helpful simulations for biology, chemistry, physics and other science topics."
						},
						2: {
							siteTitle: "Learn.Genetics",
							img: "learngenetics",
							url: "http://learn.genetics.utah.edu/",
							descrip: "Contains a lot of information about cells and DNA that can help students understand the material better."
						},
					}
				}
			},//end medBr
			leaf: {
				1: {
					siteTitle: "Bozemanscience",
					img: "bozemanscience",
					url: "http://www.bozemanscience.com/",
					descrip: "Some amazing tutorials that describe fundamental science concepts. Great for reviewing or if you are learning for the first time."
				}, // end 2 (leaf)
				2: {
					siteTitle: "HomeScienceTools",
					img: "homesciencetools",
					url: "http://www.hometrainingtools.com/",
					descrip: "Home Science Tools is a good resource for home science kits."
				},
				3: {
					siteTitle: "Khanacademy",
					img: "khanacademy",
					url: "khanacademy.com",
					descrip: "Learning by friendly videos, set courses, many subjects, and you earn points and badges!"
				}
			} //end leaf
		},//end 1 (bigBr)
		2: { //start bigBr2
			name: "Technology",
			medBr: {
			},//end medBr
			leaf: {
				1: {
					siteTitle: "Code.org",
					url: "https://code.org/",
					img: "codedotorg",
					descrip: "Code.org is a great place to get kids excited about computer programming and introduce them to basic concepts. It's got Angry Birds and Zombie characters."
				}
			}
		},//end 2 (bigBr)
		3: { //start bigBr3
			name: "Engineering",
			medBr: {
			},//end medBr
			leaf: {
				1: {
					siteTitle: "JK Brickworks",
					url: "jkbrickworks.com/",
					img: "jkbrickworks",
					descrip: "Awesome Lego models with neat mechanical designs. They have videos, parts lists, and instructions."
				}
			}
		},//end 3 (bigBr)
		4: { //start bigBr4
			name: "Math",
			medBr: {
				1: {
					name: "Geometry",
					smBr: {},
					leaf: {
						1: {
							siteTitle: "GeoGebra",
							url: "https://www.geogebra.org/",
							img: "geogebra",
							descrip: "This is a great interactive geometry application. Teachers can use it to show geometric proofs, or students can explore geometry concepts."
						}
					}
				}
			},//end medBr
			leaf: {
				1: {
					siteTitle: "WolframAlpha",
					url: "http://www.wolframalpha.com/",
					img: "wolframalpha",
					descrip: "Enter your math problem in on the search bar and it will solve it for you!"
				},
				2: {
					siteTitle: "Desmos",
					url: "https://www.desmos.com/",
					img: "desmos",
					descrip: "This is a great online graphing calculator for displaying functions in class."
				},
				3: {
					siteTitle: "Mathispower4u",
					url: "http://www.mathispower4u.com/",
					img: "mathispower4u",
					descrip: "Online math review videos. Very well done."
				},
				4: {
					siteTitle: "Math-Aids",
					url: "http://www.math-aids.com/",
					img: "math-aids",
					descrip: "Math practice worksheets generator"
				},
				5: {
					siteTitle: "PatrickJMT",
					url: "http://patrickjmt.com/",
					img: "patrickjmt",
					descrip: "A great source for online math review videos."
				}
			}
		},//end 4 (bigBr)
		5: { //start bigBr5
			name: "Art",
			medBr: {
				1: {
					name: "Elements of Art",
					smBr: {
						1: {
							name: "Line"
						},
						2: {
							name: "Color"
						},
						3: {
							name: "Shape"
						},
						4: {
							name: "Form"
						}
					},
					leaf: {
						1: {
							name: "Geeeeology.com"
						}
					}
				},
				2: {
					name: "Sculpture",
					smBr: {
						1: {
							name: "Clay"
						},
						2: {
							name: "Wood"
						}
					},
					leaf: {
						1: {
							name: "Pysics.com"
						}
					}
				},
				3: {
					name: "Painting & Drawing",
					smBr: {
						1: {
							name: "Water Color"
						},
						2: {
							name: "Oil"
						},
						3: {
							name: "Charcoal?"
						}
					},
					leaf: {
						1: {
							name: "Biology.com"
						}
					}
				},
				4: {
					name: "Dance",
					smBr: {
						1: {
							name: "Contemporary"
						},
						2: {
							name: "Classical"
						}
					},
					leaf: {
						1: {
							name: "whois.com"
						}
					}
				},//end 4 (medBr)
				5: {
					name: "Music",
					smBr: {
						1: {
							name: "Contemporary"
						}
					},
					leaf: {
						1: {
							name: "whois.com"
						}
					}
				}//end 5 (medBr)
			}//end medBr
		}//end 5 (bigBr)
	},//end bigBr
	/*Says featured, but for now it contains some resources that cross STEM topic boundaries */
	featured: {
		leaf: {
			1: {
				siteTitle: "Khanacademy",
				img: "khanacademy",
				url: "khanacademy.com",
				descrip: "Learning by friendly videos, set courses, many subjects, and you earn points and badges!"
			},
			2: {
				siteTitle: "IXL",
				img: "ixl",
				url: "https://www.ixl.com",
				descrip: "Used by to quiz her student in areas like science and math."
			},
			3: {
				siteTitle: "Study.com",
				img: "studydotcom",
				url: "http://study.com/",
				descrip: "An system to help you study and learn."
			},
			4: {
				siteTitle: "Simithsonian",
				url: "smithsonian.com",
				img: "smithsonian",
				descrip: "Home of the famouse museum. Exhibit information, online exhibits, research, education programs."
			}
		}
	}
};//end treeData