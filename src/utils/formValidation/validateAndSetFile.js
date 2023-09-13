const validateAndSetFile = (file, setFile, maxSize, allowedTypes) => {

    if (!file) {
        alert('No file selected.');
        return;
    }

    if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type.Please select an allowed file type.');
        return;
    }

    if (file.size > maxSize) {
        alert('File size exceeds the allowed limit.');
        return;
    }

    setFile(file);

}

export default validateAndSetFile;