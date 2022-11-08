import { UserOptions } from './types';
import * as chokidar from 'chokidar';
import { build } from './build';
import { getResolvedConfiguration } from './config';

/**
 * Watch config file for changes and rebuild
 */
export async function watch (options: UserOptions) {
    const { configFile } = getResolvedConfiguration(options);

    const watcher = chokidar.watch(configFile, {
        persistent: true
    });

    const watchFn = async () => {
        await build(options);
    };

    watcher
        .on('change', watchFn);

    return watcher;
}
