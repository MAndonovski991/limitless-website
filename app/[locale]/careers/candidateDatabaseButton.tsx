"use client";

import { Form, Input, message, Modal, Upload, UploadFile, UploadProps } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams } from "next/navigation";
import { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import { useTranslation } from "../../../utils/translationProvider";

const { Dragger } = Upload;

interface UploadData {
	path: string;
  }

const CandidateDatabaseButton = () => {
	const params = useParams();
	const [form] = useForm();
	const t = useTranslation(params && (params.locale as string));
	const [attachment, setAttachment] = useState<UploadData>();
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const [modalOpen, setModalOpen] = useState(false);

	const handdleApply = () => {
		form.validateFields().then(async (values) => {
			values.attachment = attachment;

			await fetch("/api/candidate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			})
			
			await fetch("/api/mailer/candidateDbFill", {
				method: "POST",
				body: JSON.stringify(values),
			}).then(() => {
				form.resetFields();
				setFileList([]);
				setModalOpen(false);
				message.success(`Your application was uploaded successfully.`);
			});
		});
	};

	const props: UploadProps = {
		name: "file",
		accept: 'image/*,.pdf',
		maxCount: 1,
		multiple: false,
		onRemove: (file) => {
			const index = fileList.indexOf(file);
			const newFileList = fileList.slice();
			newFileList.splice(index, 1);
			setFileList(newFileList);
		},
		beforeUpload: (file) => {
			let uploadData = {} as UploadData;
			setFileList([file]);
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				uploadData.path = reader.result as string;
				setAttachment(uploadData);
			}
			return false;
		},
		onChange(info) {
			const { status } = info.file;
			if (status !== "uploading") {
				console.log(info.file);
			}
			if (status === "done") {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log("Dropped files", e.dataTransfer.files);
		},
		fileList
	};

	return (
		<>
			<button
				onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					setModalOpen(true);
				}}
				id="applyButton"
				type="button"
				className="px-4 py-2 lg:px-10 lg:py-4 font-bold lg:text-lg flex items-center w-[90%] lg:w-fit justify-center gap-2 hover:gap-4 transition-all duration-300 ease-in-out bg-accent text-primary rounded-full"
			>
				{t("pages.careers.candidateDatabase.submit")} <MaterialSymbol icon="arrow_right_alt" />
			</button>
			<Modal
				open={modalOpen}
				title={t("pages.careers.candidateDatabase.modalTitle")}
				onCancel={() => {
					setModalOpen(false);
					setFileList([]);
					form.resetFields();
				}}
				onOk={() => handdleApply()}
			>
				<Form form={form} layout="vertical">
					<Form.Item name="fullname" rules={[{ required: true }]} label="Full Name">
						<Input />
					</Form.Item>
					<Form.Item name="email" rules={[{ required: true }]} label="Email Address">
						<Input />
					</Form.Item>
					<Form.Item name="phonenumber" label="Phone">
						<Input />
					</Form.Item>
					<Form.Item rules={[{ required: true }]} label="CV">
						<Dragger {...props}>
							<p className="ant-upload-drag-icon">
								<MaterialSymbol icon="unarchive" size={72} />
							</p>
							<p className="ant-upload-text">Click or drag file to this area to upload</p>
							<p className="ant-upload-hint">Single file upload only.</p>
						</Dragger>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default CandidateDatabaseButton;

