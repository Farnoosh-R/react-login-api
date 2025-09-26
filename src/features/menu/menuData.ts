export interface MenuItem {
    label: string;
    path?: string;
    children?: MenuItem[];
}
export const menuData: MenuItem[] = [
    {label: "Home", path: "/"},
    {label: "About", path: "/about"},
    {label: "Products", children: [
        {label: "product-1", path: "/Products/Product-1"},
        {label: "product-2", path: "/Products/Product-2"}
    ]},
    {label: "Contact", path: "/contact"}
]