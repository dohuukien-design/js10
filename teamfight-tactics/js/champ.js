let contain = document.getElementById('champ')
const Cost = {
    Cost1: `
    <div id='diana' class="champ_c_i c1"></div>
    <div id='elise' class="champ_c_i c1"></div>
    <div id='fiora' class="champ_c_i c1"></div>
    <div id='garen' class="champ_c_i c1"></div>
    <div id='nami' class="champ_l_n c1"></div>
    <div id='nid' class="champ_l_n c1"></div>
    <div id='maokai' class="champ_l_n c1"></div>
    <div id='tahm' class="champ_p_t c1"></div>
    <div id='tf' class="champ_p_t c1"></div>
    <div id='vayne' class="champ_v_z c1"></div>
    <div id='wukong' class="champ_v_z c1"></div>
    <div id='ys' class="champ_v_z c1"></div>
    `,
    Cost2: `
    <div id='annie' class="champ_a c2"></div>
    <div id='aphelios' class="champ_a c2"></div>
    <div id='hecarim' class="champ_c_i c2"></div>
    <div id='janna' class="champ_j_k c2"></div>
    <div id='j4' class="champ_j_k c2"></div>
    <div id='jax' class="champ_j_k c2"></div>
    <div id='liss' class="champ_l_n c2"></div>
    <div id='lulu' class="champ_l_n c2"></div>
    <div id='pyke' class="champ_p_t c2"></div>
    <div id='sylas' class="champ_p_t c2"></div>
    <div id='teemo' class="champ_p_t c2"></div>
    <div id='thresh' class="champ_p_t c2"></div>
    <div id='vi' class="champ_v_z c2"></div>
    <div id='zed' class="champ_v_z c2"></div>
    `,
    Cost3: `
    <div id='akali' class="champ_a c3"></div>
    <div id='evelynn' class="champ_c_i c3"></div>
    <div id='irelia' class="champ_c_i c3"></div>
    <div id='jinx' class="champ_j_k c3"></div>
    <div id='kalista' class="champ_j_k c3"></div>
    <div id='kata' class="champ_j_k c3"></div>
    <div id='kennen' class="champ_j_k c3"></div>
    <div id='kindred' class="champ_j_k c3"></div>
    <div id='lux' class="champ_l_n c3"></div>
    <div id='nunu' class="champ_l_n c3"></div>
    <div id='veigar' class="champ_v_z c3"></div>
    <div id='xinzhao' class="champ_v_z c3"></div>
    <div id='yuumi' class="champ_v_z c3"></div>
    `,
    Cost4: `
    <div id='aatrox' class="champ_a c4"></div>
    <div id='ahri' class="champ_a c4"></div>
    <div id='ashe' class="champ_a c4"></div>
    <div id='cassiopeia' class="champ_c_i c4"></div>
    <div id='jhin' class="champ_j_k c4"></div>
    <div id='mor' class="champ_l_n c4"></div>
    <div id='riven' class="champ_p_t c4"></div>
    <div id='sejuani' class="champ_p_t c4"></div>
    <div id='shen' class="champ_p_t c4"></div>
    <div id='talon' class="champ_p_t c4"></div>
    <div id='warwich' class="champ_v_z c4"></div>
    `,
    Cost5: `
    <div id='azir' class="champ_a c5 "></div>
    <div id='ez' class="champ_c_i c5"></div>
    <div id='kayn' class="champ_j_k c5"></div>
    <div id='lee' class="champ_l_n c5"></div>
    <div id='lilia' class="champ_l_n c5"></div>
    <div id='sett' class="champ_p_t c5"></div>
    <div id='yone' class="champ_v_z c5"></div>
    <div id='zilean' class="champ_v_z c5"></div>
    `,
    Reset:`
    <div id='aatrox' class="champ_a c4"></div>
            <div id='ahri' class="champ_a c4"></div>
            <div id='akali' class="champ_a c3"></div>
            <div id='annie' class="champ_a c2"></div>
            <div id='aphelios' class="champ_a c2"></div>
            <div id='ashe' class="champ_a c4"></div>
            <div id='azir' class="champ_a c5 "></div>
            <div id='cassiopeia' class="champ_c_i c4"></div>
            <div id='diana' class="champ_c_i c1"></div>
            <div id='elise' class="champ_c_i c1"></div>
            <div id='evelynn' class="champ_c_i c3"></div>
            <div id='ez' class="champ_c_i c5"></div>
            <div id='fiora' class="champ_c_i c1"></div>
            <div id='garen' class="champ_c_i c1"></div>
            <div id='hecarim' class="champ_c_i c2"></div>
            <div id='irelia' class="champ_c_i c3"></div>
            <div id='janna' class="champ_j_k c2"></div>
            <div id='j4' class="champ_j_k c2"></div>
            <div id='jax' class="champ_j_k c2"></div>
            <div id='jhin' class="champ_j_k c4"></div>
            <div id='jinx' class="champ_j_k c3"></div>
            <div id='kalista' class="champ_j_k c3"></div>
            <div id='kata' class="champ_j_k c3"></div>
            <div id='kayn' class="champ_j_k c5"></div>
            <div id='kennen' class="champ_j_k c3"></div>
            <div id='kindred' class="champ_j_k c3"></div>
            <div id='lee' class="champ_l_n c5"></div>
            <div id='lilia' class="champ_l_n c5"></div>
            <div id='liss' class="champ_l_n c2"></div>
            <div id='lulu' class="champ_l_n c2"></div>
            <div id='lux' class="champ_l_n c3"></div>
            <div id='maokai' class="champ_l_n c1"></div>
            <div id='mor' class="champ_l_n c4"></div>
            <div id='nami' class="champ_l_n c1"></div>
            <div id='nid' class="champ_l_n c1"></div>
            <div id='nunu' class="champ_l_n c3"></div>
            <div id='pyke' class="champ_p_t c2"></div>
            <div id='riven' class="champ_p_t c4"></div>
            <div id='sejuani' class="champ_p_t c4"></div>
            <div id='sett' class="champ_p_t c5"></div>
            <div id='shen' class="champ_p_t c4"></div>
            <div id='sylas' class="champ_p_t c2"></div>
            <div id='tahm' class="champ_p_t c1"></div>
            <div id='talon' class="champ_p_t c4"></div>
            <div id='teemo' class="champ_p_t c2"></div>
            <div id='thresh' class="champ_p_t c2"></div>
            <div id='tf' class="champ_p_t c1"></div>
            <div id='vayne' class="champ_v_z c1"></div>
            <div id='veigar' class="champ_v_z c3"></div>
            <div id='vi' class="champ_v_z c2"></div>
            <div id='warwich' class="champ_v_z c4"></div>
            <div id='wukong' class="champ_v_z c1"></div>
            <div id='xinzhao' class="champ_v_z c3"></div>
            <div id='ys' class="champ_v_z c1"></div>
            <div id='yone' class="champ_v_z c5"></div>
            <div id='yuumi' class="champ_v_z c3"></div>
            <div id='zed' class="champ_v_z c2"></div>
            <div id='zilean' class="champ_v_z c5"></div>
    `
}




function Cost1() {
    champ.innerHTML = Cost.Cost1
}
function Cost2() {
    champ.innerHTML = Cost.Cost2
}
function Cost3() {
    champ.innerHTML = Cost.Cost3
}
function Cost4() {
    champ.innerHTML = Cost.Cost4
}
function Cost5() {
    champ.innerHTML = Cost.Cost5
}
function Reset() {
    champ.innerHTML = Cost.Reset
}