import "./OtherLinksBox.css";
import Link from "next/link";
import { icons } from '../../../data/formations/formation_icons';

export default function OtherLinksBox({ customClass, onMouseLeave, links,onClick }) {

	const handlLinkclick =()=>{

	
		onClick();
	}
	return (
		<div className={`OtherLinksBoxComponentClass ${customClass}`} onMouseLeave={onMouseLeave} >
			<div className="links-container">
				{links.map((group, groupIndex) => (
					<div key={groupIndex} className="links-column"  >
						<div className="link-group">
						<Link href={group.to} onClick={handlLinkclick}>
							<h3 className="group-title">{group.title}</h3>
							</Link>
							<ul className="links">
								{group.items.map((link, linkIndex) => {
									const IconComponent = icons[link.icon];
									return (
										<li key={linkIndex}>
											<Link href={link.to}  onClick={handlLinkclick}>
												{IconComponent && <IconComponent className="icon" />}
												<span>{link.text}</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
