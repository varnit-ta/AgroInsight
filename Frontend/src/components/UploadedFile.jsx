import fileIcon from "../assets/fileIcon.png";

const UploadedFile = ({key, file}) => {
    return (
        <div key={key} className="uploaded-file">
            <img src={fileIcon} alt="" />
            <p>{file[0].name}</p>
        </div>
    )
}

export default UploadedFile;