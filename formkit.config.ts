import { DefaultConfigOptions } from '@formkit/vue';
import { createAutoAnimatePlugin } from '@formkit/addons';

const config: DefaultConfigOptions = {
	plugins: [createAutoAnimatePlugin()],
};

export default config;
