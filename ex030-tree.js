function buildTree() {
    const steffonsKids = [
        { name: "Stannis", children: [] },
        { name: "Renly", children: [] },
    ];

    const steffon = { name: "Steffon", children: steffonsKids };
    const rhaellesKids = [steffon];
    const rhaelle = { name: "Rhaelle", children: rhaellesKids };
    return rhaelle;
}

const tree = buildTree();

const firstChild = tree.children[0];
firstChild.name = "Bart";
