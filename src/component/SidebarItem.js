import { useState } from "react"

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)
    console.log(item)


    if (item.childrens) {
        return (
            <>
                <div className={open ? "sidebarItem open" : "sidebarItem"} >
                    <div className="sidebarTitles">
                        <span>
                            {item.icon && <i className={item.icon}></i>}
                            {item.title}
                        </span>
                        <i className="bi bi-chevron-down toggle-tbn" onClick={() => { setOpen(!open) }}></i>
                    </div>
                    <div className="sidebarContent">
                        {item.childrens.map((data, index) => <SidebarItem key={index} item={data} />)}
                    </div>
                </div>
            </>
        )

    } else {
        return (
            <>
                <a href={item.path || '#'} className="sidebarItem plain" >

                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>



                </a>
            </>
        )

    }
}