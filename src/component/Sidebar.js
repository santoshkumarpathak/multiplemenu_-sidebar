import SidebarItem from './SidebarItem'
import data from '../component/SidebarData/data.json'
export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                {
                    data.map((item,index) =>  <SidebarItem key={index} item={item}/>)
                }
               
            </div>
        </>
    )
}