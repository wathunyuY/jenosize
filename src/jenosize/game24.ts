const TEXT_YES = "YES";
const TEXT_NO = "NO";
export const is24 = (str) => {
    return solve24(str) ? TEXT_YES:TEXT_NO;
}

var ar = [], order = [0, 1, 2], op = [], val = [];
var NOVAL = 9999, oper = "+-*/", out;

function rnd(n) { return Math.floor(Math.random() * n) }
function getvalue(x, dir) {
    var r = NOVAL;
    if (dir > 0) ++x;
    while (1) {
        if (val[x] != NOVAL) {
            r = val[x];
            val[x] = NOVAL;
            break;
        }
        x += dir;
    }
    return r * 1;
}
function calc() {
    var c = 0, l, r, x;
    val = ar.join('/').split('/');
    while (c < 3) {
        x = order[c];
        l = getvalue(x, -1);
        r = getvalue(x, 1);
        switch (op[x]) {
            case 0: val[x] = l + r; break;
            case 1: val[x] = l - r; break;
            case 2: val[x] = l * r; break;
            case 3:
                if (!r || l % r) return 0;
                val[x] = l / r;
        }
        ++c;
    }
    return getvalue(-1, 1);
}
function shuffle(s, n) {
    var x = n, p = eval(s), r, t;
    while (x--) {
        r = rnd(n);
        t = p[x];
        p[x] = p[r];
        p[r] = t;
    }
}

function solve24(s) {
    var z = 4, r;
    while (z--) ar[z] = s.charCodeAt(z) - 48;
    out = "";
    for (z = 100000; z--;) {
        r = rnd(256);
        op[0] = r & 3;
        op[1] = (r >> 2) & 3;
        op[2] = (r >> 4) & 3;
        shuffle("ar", 4);
        shuffle("order", 3);
        if (calc() != 24) continue;
        return true
    }
    return false;
}