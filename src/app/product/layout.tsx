export default function Layout({ children, modal }: { children: React.ReactNode, modal:React.ReactNode }) {
    return (
        <div className="p-5">
            <div>{children}</div>
            <div >{modal}</div>  
        </div>
    )
}