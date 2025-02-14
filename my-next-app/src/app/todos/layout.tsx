function Layout ({children, todos}: {children: React.ReactNode, todos: any}) {
    return (
        <>
        {children}
        <h1 className="w-full h-4 text-center">List Todo</h1>
        {todos}
        </>
    )
}

export default Layout;