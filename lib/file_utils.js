class FileUtils {

    fileType(file) {
        return file.split(".").pop();
    }
    
    contentType(file) {
        
        switch (this.fileType(file)) {
    
            case "html":
                return "text/html";
                
            case "js":
                return "application/javascript";
    
            case "css":
                return "text/css";
    
            default:
                throw new Error("Unknown content type");
    
        }
    }
}

module.exports = new FileUtils();