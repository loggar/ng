try {
    throw new Error("En error happened");
}
catch (error) {
    console.error("Log error", error);
}
console.log("Script execution continues");
