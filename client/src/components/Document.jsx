import React from "react";

const Document = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      position: "relative",
    },

    content: {
      width: "285px",
      maxWidth: "90%",
    },

    heading: {
      fontSize: "22px",
      fontWeight: "700",
      marginBottom: "10px",
      letterSpacing: "-0.5px",
    },

    description: {
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "24px",
      color: "#eeeeee",
    },

    button: {
      backgroundColor: "#f0f0f0",
      color: "#111111",
      border: "none",
      borderRadius: "7px",
      padding: "9px 14px",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      marginBottom: "22px",
    },

    errorCode: {
      fontFamily: "monospace",
      fontSize: "12px",
      color: "#a0a0a0",
      lineHeight: "20px",
    },

    footer: {
      position: "absolute",
      bottom: "20px",
      left: "0",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      flexWrap: "wrap",
      fontFamily: "monospace",
      fontSize: "11px",
      color: "#888888",
    },

    footerLink: {
      cursor: "pointer",
      textDecoration: "none",
      color: "#888888",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>This page is unavailable</h2>

        <p style={styles.description}>
          A function needed by this page temporarily failed.
        </p>

        <button
          style={styles.button}
          onClick={() => window.location.reload()}
        >
          Reload page
        </button>

        <div style={styles.errorCode}>
          <div>500 FUNCTION_INVOCATION_FAILED</div>
          <div>bom1::fc4vp-1794305704451-1d76d3f4cf03</div>
        </div>
      </div>

      <div style={styles.footer}>
        <span style={styles.footerLink}>VIEW DOCUMENTATION</span>
        <span>/</span>
        <span style={styles.footerLink}>VIEW LOGS</span>
        <span>/</span>
        <span style={styles.footerLink}>COPY DEBUG PROMPT</span>
      </div>
    </div>
  );
};

export default Document;