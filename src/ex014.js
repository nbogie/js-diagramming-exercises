function main() {

    const g = { kids: [], n: "Gandalf" };

    const r = { kids: [], n: "Ripley" };

    const i = { kids: [g], n: "Iorek" };

    const h = { kids: [i, r], n: "Hattori" };

    return h;

}

const t = main();

