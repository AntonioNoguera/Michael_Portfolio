"use client"

import { useState } from "react"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client" 

import TecnicalTab from "./tecnical_knowledge/tecnical_tab" 
import ProyectTab from "./proyects/proyect_tab"

export default function SharedLayoutAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabs[0])

    let tabMenuClass: string = "flex gap-x-1 bg-primary85 mx-20 rounded-2xl px-1";
    let tabClass: string = "w-full py-4 my-1 flex text-white rounded-xl cursor-pointer relative justify-items-center justify-center";
    let underlineClass: string = "absolute bottom-0 left-0 right-0 h-[2px] bg-[#00FF0000] ";

    return (
        <div className=" w-full h-full flex flex-col py-6"> 

            <nav>
                <ul className={tabMenuClass} >
                    {tabs.map((item) => (
                        <motion.li
                            key={item.title}
                            initial={false}
                            animate={
                                {
                                    backgroundColor: item === selectedTab ? "#eee" : "#eee0",
                                    color: item === selectedTab ? "#000000" : "",
                                }
                            }
                            className={tabClass}
                            onClick={() => setSelectedTab(item)}>

                            {item.title}

                            {
                                item === selectedTab ? (
                                    <motion.div className={underlineClass} layoutId="underline" id="underline" />
                                ) : null
                            }
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <AnimatePresence mode="wait">
                <motion.div
                    className="flex-grow flex items-start mx-10"
                    key={selectedTab ? selectedTab.title : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {selectedTab ? selectedTab.body : "😋"}
                </motion.div>
            </AnimatePresence>

        </div>
    )
}



const shared_section = [
    {
        title: "Proyectos Relevantes",
        body: <ProyectTab />
    },
    {
        title: "Conocimiento Técnico",
        body: <TecnicalTab />
    },
]

const tabs = shared_section
