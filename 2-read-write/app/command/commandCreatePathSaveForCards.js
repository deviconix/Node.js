import { createPathJoin, createNotExistsFolderInPath } from '../../libs/path/index.js'

export const commandCreatePathSaveForCards = localFolderSave => {

    const PATH_CARD_SAVE = createPathJoin(localFolderSave);

    createNotExistsFolderInPath(PATH_CARD_SAVE);

    return PATH_CARD_SAVE;
}