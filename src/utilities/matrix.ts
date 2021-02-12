import { Matrix, View, Rotation } from '@types';
import { VIEW, AXIS, ROT_45, ROT_60, ROT_CMA } from '@constants';
import { sincos, radian } from '@utilities/math';

export const multiplyMatrix = (m1: Matrix, m2: Matrix): Matrix => (
    m1.map((row, i): number[] => (
        m2[0].map((_: number, j: number): number =>
            row.reduce((acc: number, _: number, n: number): number =>
                acc + m1[i][n] * m2[n][j],
                0
            )
        )
    )
));

export const multiplyMatrices = (...m: Matrix[]): Matrix => {
    let matrix = m[0];
    for (let i = 1; i < m.length; i++) {
        matrix = multiplyMatrix(matrix, m[i]);
    }
    return matrix;
};

export const rotateX = (r: number): Matrix => {
    const sc = sincos(r);
    return [
        [1,        0,        0     ],
        [0,        sc.cos, - sc.sin],
        [0,        sc.sin,   sc.cos]
    ];
};

export const rotateY = (r: number): Matrix => {
    const sc = sincos(r);
    return [
        [sc.cos,   0,      sc.sin],
        [0,        1,      0     ],
        [- sc.sin, 0,      sc.cos]
    ];
};

export const rotateZ = (r: number): Matrix => {
    const sc = sincos(r);
    return [
        [sc.cos, - sc.sin,  0],
        [sc.sin,   sc.cos,  0],
        [0,        0,       1]
    ];
};

export const topMatrix = multiplyMatrices(
    rotateX(ROT_CMA),
    rotateZ(-ROT_45)
);

export const frontMatrix = multiplyMatrices(
    rotateZ(-ROT_60),
    rotateX(ROT_CMA),
    rotateZ(ROT_45)
);

export const sideMatrix = multiplyMatrices(
    rotateZ(ROT_60),
    rotateX(ROT_CMA),
    rotateZ(-ROT_45)
);

export const getViewMatrix = (view: View, rotation?: Rotation): Matrix | null => {

    if (!rotation) {
        switch(view) {
            case VIEW.top:
                return topMatrix;
            case VIEW.front:
                return frontMatrix;
            case VIEW.side:
                return sideMatrix;
            default:
                return null;
        }
    }

    const value = radian(rotation.value);

    switch(view) {
        case VIEW.top: {
            switch(rotation.axis) {
                case AXIS.top:
                    return multiplyMatrix(
                        topMatrix,
                        rotateZ(value)
                    );
                case AXIS.left:
                    return multiplyMatrix(
                        topMatrix,
                        rotateX(-value)
                    );
                default:
                    return multiplyMatrix(
                        topMatrix,
                        rotateY(value)
                    );                    
            }
        }
        case VIEW.front: {
            switch(rotation.axis) {
                case AXIS.top:
                    return multiplyMatrix(
                        frontMatrix,
                        rotateY(value)
                    );
                case AXIS.left:                    
                    return multiplyMatrix(
                        frontMatrix,
                        rotateX(value)
                    );
                default:
                    return multiplyMatrix(
                        frontMatrix,
                        rotateZ(value)
                    );
            }
        }
        case VIEW.side: {
            switch(rotation.axis) {
                case AXIS.top:
                    return multiplyMatrix(
                        sideMatrix,
                        rotateY(value)
                    );
                case AXIS.left:
                    return multiplyMatrix(
                        sideMatrix,
                        rotateZ(value)
                    );
                default:
                    return multiplyMatrix(
                        sideMatrix,
                        rotateX(-value)
                    );                    
            }
        }
        default:
            return null;
    }
};