const getPathForProduction = (id, pagesArray) => {
    const matchingPage = pagesArray.find(page => page.node.pageContext && page.node.pageContext.id === id);
    return matchingPage.node.path;
};

export default getPathForProduction;