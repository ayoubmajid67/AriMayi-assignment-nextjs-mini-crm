// internal imports :
import "./HeaderProfile.css";
const defaultImg = "/assets/imgs/profile.png";

// external imports : 
import Link from "next/link"
import Image from "next/image"
export default function HeaderProfile({ profileImg }) {
	return (
		<div className="HeaderProfileComponentClass">
			<Link href="/profile">
			<Image src={profileImg ? profileImg : defaultImg}  width={60} height={60} alt="the client profile image" />
			</Link>
		
		</div>
	);
}
