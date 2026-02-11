export function logTarotEvent(cardId) {
    const logEntry = {
        timestamp: new Date().toISOString(),
        card: cardId,
        source: "tarot-slow-v2.1"
    };

    let logs = JSON.parse(localStorage.getItem("tarot_logs") || "[]");
    logs.push(logEntry);
    localStorage.setItem("tarot_logs", JSON.stringify(logs));
}
