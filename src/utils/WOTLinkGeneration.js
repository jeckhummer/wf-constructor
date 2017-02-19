export const generateWOTLink = (WOTID, WOID) => {
    return `EntryPoint2.aspx?DOCID=${WOID}&WOTID=${WOTID}`;
};