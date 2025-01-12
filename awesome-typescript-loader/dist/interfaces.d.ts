import * as ts from 'typescript';
export interface CompilerInfo {
    compilerPath: string;
    compilerVersion: string;
    tsImpl: typeof ts;
}
export interface LoaderConfig {
    instance?: string;
    compiler?: string;
    configFileName?: string;
    configFileContent?: string;
    transpileOnly?: boolean;
    ignoreDiagnostics?: number[];
    compilerOptions?: ts.CompilerOptions;
    useTranspileModule?: boolean;
    useBabel?: boolean;
    babelCore?: string;
    babelOptions?: any;
    usePrecompiledFiles?: boolean;
    silent?: boolean;
    useCache?: boolean;
    cacheDirectory?: string;
    entryFileIsJs?: boolean;
    debug?: boolean;
    getCustomTransformers?(): ts.CustomTransformers | undefined;
}
export interface OutputFile {
    text: string;
    sourceMap: string;
    declaration: ts.OutputFile;
}
export declare type TsConfig = ts.ParsedCommandLine;
