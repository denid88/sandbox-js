const id1 = Symbol.for("app.user");
const id2 = Symbol.for("app.user");

console.log(id1 === id2); // true (бо з реєстру)