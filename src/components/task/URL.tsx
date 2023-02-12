import { typo_body4_regular, typo_h4_semibold } from "@src/styles/Typo";
import styled from "styled-components";
import Icons from "@src/assets/icons/index";

type Props = {
  urlLink: string;
  urlDescription: string;
};

const URL = ({ urlLink, urlDescription }: Props) => (
  <UrlWrapper>
    <UrlTitle>URL</UrlTitle>
    <UrlContent href={urlLink}>
      <Icons.IconLink />
      <Margin />
      {urlDescription}
    </UrlContent>
  </UrlWrapper>
);

const UrlWrapper = styled.div``;

const UrlTitle = styled.p`
  ${typo_body4_regular};
  color: ${({ theme }) => theme.gray[500]};
  margin-bottom: 4px;
`;

const UrlContent = styled.a`
  display: flex;
  ${typo_h4_semibold};
  color: ${({ theme }) => theme.black};
  text-decoration: underline;
`;

const Margin = styled.div`
  margin-right: 4px;
`;

export default URL;
