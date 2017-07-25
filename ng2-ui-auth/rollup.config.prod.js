/**
 * Created by ronze on 3/24/2016.
 */
import uglify from "rollup-plugin-uglify";
import devConfig from "./rollup.config";

export default Object.assign(devConfig, {
    dest: 'bundle/ng2-ui-auth.min.js',
    sourceMap: 'bundle/ng2-ui-auth.min.js.map',
    plugins: [
        ...devConfig.plugins,
        uglify()
    ]
})