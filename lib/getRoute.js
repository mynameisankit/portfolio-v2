function getRoute(pathname) {
    const URLMatcher = /^\/([-\w]*).*$/;

    return URLMatcher.exec(pathname)[1].toLowerCase();
}

export default getRoute;