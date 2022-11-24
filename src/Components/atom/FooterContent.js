import Dialog from "@mui/material/Dialog";

import styled from "@emotion/styled";
import config from "../../config.json";

const ContentWrapper = styled(`div`)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10vh 10vw 10vh 10vw",
  zIndex: "2",
  fontSize: "1.6",
  color: "black",
});

const CopyrightHeaderText = styled.div({
  fontSize: "min(2vw,20px)",
  fontWeight: "800",
  margin: "2vh 0 0.6vh 0",
});

const LinkTag = styled.a({
  color: config.colors.blue,
});

export default function LandingFooter() {
  return (
    <ContentWrapper>
      <CopyrightHeaderText>Material-UI / MUI</CopyrightHeaderText>
      Copyright ⓒ [2014] [Material-UI / MUI] The MIT License (MIT) Copyright (c) 2014 Call-Em-All
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software
      and associated documentation files (the "Software"), to deal in the Software without
      restriction, including without limitation the rights to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
      Software is furnished to do so, subject to the following conditions: The above copyright
      notice and this permission notice shall be included in all copies or substantial portions of
      the Software. <br />
      <br />
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
      BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
      DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      <br />
      <LinkTag href='https://github.com/mui/material-ui/blob/master/LICENSE'>
        https://github.com/mui/material-ui/blob/master/LICENSE
      </LinkTag>
      <br />
      <br />
      <CopyrightHeaderText>W3C Validator</CopyrightHeaderText>
      Copyright ⓒ [2022] World Wide Web Consortium, (Massachusetts Institute of Technology, Institut
      National de Recherche en Informatique et en Automatique, Keio University). 모든 권리를 보유함.
      <br />
      <LinkTag href='http://www.w3.org/Consortium/Legal/'>
        http://www.w3.org/Consortium/Legal/
      </LinkTag>
      <br />
      <br />
      <CopyrightHeaderText>Google Lighthouse</CopyrightHeaderText>
      Copyright ⓒ [2022] [Google Lighthouse]
      <br />
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
      except in compliance with the License. You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in
      writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
      WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
      specific language governing permissions and limitations under the License. <br />
      <LinkTag href='http://www.w3.org/Consortium/Legal/'>
        http://www.w3.org/Consortium/Legal/
      </LinkTag>
      <CopyrightHeaderText>Project contributor:</CopyrightHeaderText>
      <b>
        <a href='https://github.com/bsonCrew' target='_blank' rel='noopener noreferrer'>
          bson crew.
        </a>
      </b>
      All rights reserved © 2022 - {new Date().getFullYear()}
    </ContentWrapper>
  );
}
