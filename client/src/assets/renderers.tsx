import CCircle from "../Components/Map/Renderers/Circle";
import Circles from "../Components/Map/Renderers/Circles";
import Hotline from "../Components/Map/Renderers/Hotline";
import Hotpoints from "../Components/Map/Renderers/Hotpoints";
import Line from "../Components/Map/Renderers/Line";
import Rectangles from "../Components/Map/Renderers/Rectangles";
import { EventRenderer, Renderer, RendererName } from "../models/renderers";

const renderers: Record<RendererName, Renderer | EventRenderer> = {
  circle: CCircle,
  circles: Circles,
  rectangles: Rectangles,
  line: Line,
  hotline: Hotline,
  hotpoints: Hotpoints,
};

export default renderers;
