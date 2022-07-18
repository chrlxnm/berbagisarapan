import { Button, Upload } from "antd";
import { ButtonSecondary } from "../Button/Button";

const UploadButton = ({setAlert}) => {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        showUploadList: false,
        multiple:false,
        onChange(info) {console.log(info)
          if (info.file.status === 'uploading') {
            console.log(info.file, info.fileList);
            setAlert({
                isVisible:true,
                type:'INFO',
                message:'Sedang dalam proses upload ....'
            })
          }
      
          if (info.file.status === 'done') {
            setAlert({
                isVisible:true,
                type:'SUCCESS',
                message:'Proses upload berhasil.'
            })
          } else if (info.file.status === 'error') {
            setAlert({
                isVisible:true,
                type:'ERROR',
                message:'Proses upload gagal.'
            })
          }
        },
      };

    return(
        <>
        <Upload
        {...props}
        >
            <ButtonSecondary
                >
                Upload
            </ButtonSecondary>
        </Upload>
        </>
    )
}

export default UploadButton;