import { AsideStyled } from "./aside-styled";
import { LogoHeftiToMark } from "./aside-styled";
import { HeadingAside } from "./aside-styled";
import { IllustrationAside } from "./aside-styled";


export const Aside: React.FC = () => {
    return (
        <AsideStyled>
            <LogoHeftiToMark src="../../../public/assets/logo-to-mark.png" />
            <HeadingAside>A melhor forma de marcar o seu expediente!</HeadingAside>
            <IllustrationAside src="../../../public/assets/illustration-1-to-mark.png" />
        </AsideStyled>
    )
}