function Loader() {
    return (
        <div style={styles.loaderContainer}>
            <div style={styles.spinner}></div>
        </div>
    );
}

const styles = {
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    spinner: {
        width: "60px",
        height: "60px",
        border: "8px solid #f3f3f3",
        borderTop: "8px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
    },
};

// Inject keyframes via style tag (CSS-in-JS workaround)
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleTag);

export default Loader;
