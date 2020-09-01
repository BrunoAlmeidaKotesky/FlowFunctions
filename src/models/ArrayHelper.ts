

export default class ArrayHelper {

    public excludeMatch(arr1: any[], arr2: any[], matchKey?: string) {

        if (arr1.some(i => i instanceof Object) === true || arr2.some(i => i instanceof Object)) {
            var props = Object.keys(arr1[0]);

            if (props && props.length > 0 && matchKey) {
                const result = arr1.filter(o1 => !arr2.some((o2) => o1[matchKey] === o2[matchKey]))
                    .map(o => props
                        .reduce((newo, name) => {
                            newo[name] = o[name];
                            return newo;
                        }, {})
                    );

                return result;
            }
        }
        else return arr1.filter(t => !arr2.includes(t));
    }

}