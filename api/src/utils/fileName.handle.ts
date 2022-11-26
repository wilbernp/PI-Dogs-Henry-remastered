interface CleanFileName {
    cleanName:string;
    forImport:string;
}

export const handleCleanFileName = (filename:string):CleanFileName => {
    console.log("filename", filename)
    const arrayFile = filename.split(".")
    const cleanName = arrayFile[0]
    if (arrayFile.length>2) {
        arrayFile.pop()
        return {
            cleanName,
            forImport:arrayFile.join(".")
        }
    }
    return {cleanName, forImport:cleanName}

}