import Dialog from "@mui/material/Dialog";

import styled from "@emotion/styled";

const FooterWrapper = styled(`div`)({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	padding: "12vh 8vw 12vh 8vw",
	zIndex: "2",
	fontSize: "1.6",
});

export default function LandingFooter() {
	return (
		<FooterWrapper>
			<div className="mb-2">
				<b>W3C Validator</b>
				<br />
				Copyright ⓒ [2022] World Wide Web Consortium, (Massachusetts Institute
				of Technology, Institut National de Recherche en Informatique et en
				Automatique, Keio University). 모든 권리를 보유함.
				<br />
				<a href="http://www.w3.org/Consortium/Legal/" className="text-blue">
					http://www.w3.org/Consortium/Legal/
				</a>
				<br />
				<br />
				<b>Google Lighthouse</b>
				<br />
				Copyright ⓒ [2022] [Google Lighthouse]
				<br />
				Licensed under the Apache License, Version 2.0 (the "License"); you may
				not use this file except in compliance with the License. You may obtain
				a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
				Unless required by applicable law or agreed to in writing, software
				distributed under the License is distributed on an "AS IS" BASIS,
				WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
				See the License for the specific language governing permissions and
				limitations under the License. <br />
				<a href="http://www.w3.org/Consortium/Legal/" className="text-blue">
					http://www.w3.org/Consortium/Legal/
				</a>
			</div>
			<div className="mt-12">
				Project contributor:
				<b>
					<a
						href="https://github.com/bsonCrew"
						target="_blank"
						rel="noopener noreferrer"
						className="mx-1 decoration-[#50d71e]"
					>
						bson crew.
					</a>
				</b>
				All rights reserved © 2022 - {new Date().getFullYear()}
			</div>
		</FooterWrapper>
	);
}
