function Bracket({ children }) {
    return (
        <div
            className="border border-[#f54330] text-xs text-[#f54330]"
            style={{ padding: "1px" }}
            id="status-card"
        >
            {children}
        </div>
    );
}

export default Bracket;
