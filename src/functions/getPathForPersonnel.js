const getPathForPersonnel = (name, pages) => {
    const page = pages.find(page => page.node.pageContext && page.node.pageContext.name === name)

    return page.node.path;
};

export default getPathForPersonnel;