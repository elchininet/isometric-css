import {
    Matrix,
    View,
    Rotation
} from '@types';
import {
    VIEW,
    AXIS,
    ROT_45,
    ROT_60,
    ROT_CMA
} from '@constants';
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

export const rotationToRotationMatrix = (view: View, rotation: Rotation): Matrix | null => {
    const value = radian(rotation.value);
    switch(view) {
        case VIEW.top: {
            switch(rotation.axis) {
                case AXIS.top:
                    return rotateZ(value);
                case AXIS.left:
                    return rotateX(-value);
                case AXIS.right:
                    return rotateY(value);
                default:
                    return null;
            }
        }
        case VIEW.front: {
            switch(rotation.axis) {
                case AXIS.top:
                    return rotateY(value);
                case AXIS.left:                    
                    return rotateX(value);
                case AXIS.right:
                    return rotateZ(value);
                default:
                    return null;
            }
        }
        case VIEW.side: {
            switch(rotation.axis) {
                case AXIS.top:
                    return rotateY(value);
                case AXIS.left:
                    return rotateZ(value);
                case AXIS.right:
                    return rotateX(-value);
                default:
                    return null;
            }
        }
        default:
            return null;
    }
};

export const getViewMatrix = (
    view: View,
    parentRotations: Rotation[],
    rotation?: Rotation
): Matrix | null => {
    
    const rotationMatrices: Matrix[]  = [];

    parentRotations.forEach((rotation: Rotation): void => {
        const matrix = rotationToRotationMatrix(view, rotation);
        if (matrix) rotationMatrices.push(matrix);
    });

    const rotationMatrix = rotation
        ? rotationToRotationMatrix(view, rotation)
        : null;
        
    if (rotationMatrix) rotationMatrices.push(rotationMatrix);    
    
    switch(view) {
        case VIEW.top: {
            return multiplyMatrices(topMatrix, ...rotationMatrices);
        }
        case VIEW.front: {
            return multiplyMatrices(frontMatrix, ...rotationMatrices);
        }
        case VIEW.side: {
            return multiplyMatrices(sideMatrix, ...rotationMatrices);
        }
    }

    return null;
};