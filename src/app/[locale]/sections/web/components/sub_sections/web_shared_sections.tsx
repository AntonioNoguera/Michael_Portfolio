"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

export default function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0])

    let tabMenuClass: string = "";
    let underlineClass: string = "absolute bottom-0 left-0 right-0 h-[2px] bg-[#0f1115]";
    let tabClass: string = "w-full bg-white flex text-white_primary px-4 py-4 cursor-pointer relative justify-items-center justify-center";

    return (
        <div className="w-full flex-grow">

            <nav>
                <ul className="flex bg-primary85">
                    {tabs.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={
                                {
                                    backgroundColor: item === selectedTab ? "#eee" : "#eee0",
                                    color: item === selectedTab ? "#000000" : "",
                                }
                            }
                            className={tabClass}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}

                            {
                                item === selectedTab ? (
                                    <motion.div className={underlineClass} layoutId="underline" id="underline" />
                                ) : null
                            }
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main className="flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={icon}
                    >
                        {selectedTab ? selectedTab.icon : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}

const icon: React.CSSProperties = {
    fontSize: 128,
}

const allIngredients = [
    { icon: "🍅", label: "Proyectos" },
    { icon: "🥬", label: "Habillidades Técnicas" },
]

const tabs = allIngredients
