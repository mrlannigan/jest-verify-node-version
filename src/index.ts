import { JSONSchemaForNPMPackageJsonFiles } from '@schemastore/package';
import fs from 'fs';
import path from 'path';
import semver from 'semver';

export function check(incomingPackageJson?: JSONSchemaForNPMPackageJsonFiles, doNotThrow: boolean = false): boolean {
    const nodeVersion: string = process.version;

    let packageJson: JSONSchemaForNPMPackageJsonFiles = incomingPackageJson;

    if (!packageJson) {
        const cwd: string = process.cwd();
        const packPath: string = path.join(cwd, 'package.json');

        if (fs.existsSync(packPath)) {
            try {
                packageJson = JSON.parse(fs.readFileSync(packPath).toString());
            } catch (error) {
                const err: Error = error;
                err.message += ` while reading file ${packPath}`;
                throw err;
            }
        }
    }

    if (packageJson.engines && packageJson.engines.node) {
        const engineReq: string = packageJson.engines.node;
        if (!semver.satisfies(nodeVersion, engineReq)) {
            if (!doNotThrow) {
                throw new Error(`node version ${nodeVersion}, does not satisfy engine requirement of ${engineReq}`);
            }

            return false;
        }
    }
    return true;
}
