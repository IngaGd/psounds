const validateAndSetFile = (file, setFile, maxSize, allowedTypes, setFileError) => {

    if (!file) {
        setFileError('No file selected.');
        return;
    }

    if (!allowedTypes.includes(file.type)) {
        setFileError('Invalid file type.Please select an allowed file types: OGG, AAC, MP3, WAV, AIFF.');
        return;
    }

    if (file.size > maxSize) {
        setFileError('File size exceeds the allowed limit - 15MB.');
        return;
    }

    setFileError(null);
    setFile(file);

}

export default validateAndSetFile;