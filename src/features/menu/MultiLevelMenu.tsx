import type { MenuItem } from "./menuData";

interface MultiLevelMenuProps {
    menu: MenuItem[];
}

const MultiLevelMenu = ({menu}: MultiLevelMenuProps) => {
    return(
        <ul>
            {menu.map((item: any, index: number) => {
                return(
                    <li key={index} className="relative group">
                        {item.path ? (<a href={item.path}>{item.label}</a>) : (<span>{item.label}</span>)}
                        {item.children && (<ul className="opacity-0 invisile group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-linear">
                            {item.children.map((child: any, index: number) => {
                               return(
                                 <li key={index}><a href={child.path}>{child.label}</a>
                                {child.children && (
                                    <MultiLevelMenu menu={child.children}/>
                                )}
                                </li>
                               )
                            })}
                        </ul>)}
                    </li>
                )
            })}
        </ul>
    )
}
export default MultiLevelMenu;