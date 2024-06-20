// import to delete a file
import {unlink} from 'node:fs';

unlink('./hello.html', () => {
    console.log('File deleted');
});