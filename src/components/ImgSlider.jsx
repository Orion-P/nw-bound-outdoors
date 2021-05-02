import Loadable from "@loadable/component"

const Caro = Loadable(() => import("./test"))

export default Caro
