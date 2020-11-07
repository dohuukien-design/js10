let contain = document.getElementById('champ')
const Champ = {
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
    `,
    Cultist:`
    <div id='aatrox' class="champ_a c4 cultist"></div>
    <div id='elise' class="champ_c_i c1 cultist"></div>
    <div id='evelynn' class="champ_c_i c3 cultist"></div>
    <div id='jhin' class="champ_j_k c4 cultist"></div>
    <div id='kalista' class="champ_j_k c3 cultist"></div>
    <div id='pyke' class="champ_p_t c2 cultist"></div>
    <div id='tf' class="champ_p_t c1 cultist"></div>
    <div id='zilean' class="champ_v_z c5 cultist"></div>
    `,
    Divine:`
    <div id='irelia' class="champ_c_i c3 divine enlightened"></div>
    <div id='jax' class="champ_j_k c2 divine"></div>
    <div id='lee' class="champ_l_n c5 divine"></div>
    <div id='lux' class="champ_l_n c3 divine"></div>
    <div id='warwich' class="champ_v_z c4 divine"></div>
    <div id='wukong' class="champ_v_z c1 divine"></div>
    `,
    Dusk:`
    <div id='cassiopeia' class="champ_c_i c4 dusk"></div>
    <div id='lilia' class="champ_l_n c5 dusk"></div>
    <div id='riven' class="champ_p_t c4 dusk"></div>
    <div id='thresh' class="champ_p_t c2 dusk"></div>
    <div id='vayne' class="champ_v_z c1 dusk"></div>
    `,
    Elderwood:`
    <div id='ashe' class="champ_a c4 elderwood"></div>
    <div id='ez' class="champ_c_i c5 elderwood"></div>
    <div id='hecarim' class="champ_c_i c2 elderwood"></div>           
    <div id='lulu' class="champ_l_n c2 elderwood"></div>
    <div id='maokai' class="champ_l_n c1 elderwood"></div>
    <div id='nunu' class="champ_l_n c3 elderwood"></div>
    <div id='veigar' class="champ_v_z c3 elderwood"></div>
    `,
    Enlightened:`
    <div id='fiora' class="champ_c_i c1 enlightened"></div>
    <div id='irelia' class="champ_c_i c3 divine enlightened"></div>
    <div id='janna' class="champ_j_k c2 enlightened"></div>
    <div id='mor' class="champ_l_n c4 enlightened"></div>
    <div id='nami' class="champ_l_n c1 enlightened"></div>
    <div id='talon' class="champ_p_t c4 enlightened"></div>
    `,
    Exile:`
    <div id='ys' class="champ_v_z c1 exile"></div>
    <div id='yone' class="champ_v_z c5 exile"></div>
    `,
    Fortune:`
    <div id='annie' class="champ_a c2 fortune"></div>
    <div id='jinx' class="champ_j_k c3 fortune"></div>
    <div id='kata' class="champ_j_k c3 fortune warlord"></div>
    <div id='sejuani' class="champ_p_t c4 fortune"></div>
    <div id='tahm' class="champ_p_t c1 fortune"></div>
    `,
    Moonlight:`
    <div id='aphelios' class="champ_a c2 moonlight"></div>
    <div id='diana' class="champ_c_i c1 moonlight"></div>
    <div id='liss' class="champ_l_n c2 moonlight"></div>
    <div id='sylas' class="champ_p_t c2 moonlight"></div>
    `,
    Ninja:`
    <div id='akali' class="champ_a c3 ninja"></div>
    <div id='kennen' class="champ_j_k c3 ninja"></div>
    <div id='shen' class="champ_p_t c4 ninja"></div>
    <div id='zed' class="champ_v_z c2 ninja"></div>
    `,
    Spirit:`
    <div id='ahri' class="champ_a c4 spirit"></div>
    <div id='kindred' class="champ_j_k c3 spirit"></div>
    <div id='teemo' class="champ_p_t c2 spirit"></div>
    <div id='yuumi' class="champ_v_z c3 spirit"></div>
    `,
    TheBoss:`
    <div id='sett' class="champ_p_t c5 theboss"></div>
    `,
    Tormented:`
    <div id='kayn' class="champ_j_k c5 tormented"></div>
    `,
    Warlord:`
    <div id='azir' class="champ_a c5 warlord"></div>
    <div id='garen' class="champ_c_i c1 warlord"></div>
    <div id='j4' class="champ_j_k c2 warlord"></div>
    <div id='kata' class="champ_j_k c3 fortune warlord"></div>
    <div id='nid' class="champ_l_n c1 warlord"></div>
    <div id='vi' class="champ_v_z c2 warlord"></div>
    <div id='xinzhao' class="champ_v_z c3 warlord"></div>
    `,
    Adept:`
    <div id='irelia' class="champ_c_i c3 divine enlightened adept"></div>
    <div id='shen' class="champ_p_t c4 ninja adept mystic"></div>
    <div id='yone' class="champ_v_z c5 exile adept"></div>
    `,
    Assasin:`
    <div id='akali' class="champ_a c3 ninja assasin"></div>
    <div id='diana' class="champ_c_i c1 moonlight assasin"></div>
    <div id='kata' class="champ_j_k c3 fortune warlord assasin"></div>
    <div id='pyke' class="champ_p_t c2 cultist assasin"></div>
    <div id='talon' class="champ_p_t c4 enlightened assasin"></div>
    `,
    Brawler:`
    <div id='maokai' class="champ_l_n c1 elderwood brawler"></div>
    <div id='nunu' class="champ_l_n c3 elderwood brawler"></div>
    <div id='sett' class="champ_p_t c5 theboss brawler"></div>
    <div id='sylas' class="champ_p_t c2 moonlight brawler"></div>
    <div id='tahm' class="champ_p_t c1 fortune brawler"></div>
    <div id='vi' class="champ_v_z c2 warlord brawler"></div>
    <div id='warwich' class="champ_v_z c4 divine brawler hunter"></div>
    `,
    Dazzler:`
    <div id='ez' class="champ_c_i c5 elderwood dazzler"></div>
    <div id='liss' class="champ_l_n c2 moonlight dazzler"></div>
    <div id='lux' class="champ_l_n c3 divine dazzler"></div>
    <div id='mor' class="champ_l_n c4 enlightened dazzler"></div>
    `,
    Duelist:`
    <div id='fiora' class="champ_c_i c1 enlightened duelist"></div>
    <div id='jax' class="champ_j_k c2 divine duelist"></div>
    <div id='kalista' class="champ_j_k c3 cultist duelist"></div>
    <div id='lee' class="champ_l_n c5 divine duelist"></div>
    <div id='xinzhao' class="champ_v_z c3 warlord duelist"></div>
    <div id='ys' class="champ_v_z c1 exile duelist"></div>
    `,
    Emperor:`
    <div id='azir' class="champ_a c5 warlord emperor keeper"></div>
    `,
    Hunter:`
    <div id='aphelios' class="champ_a c2 moonlight hunter"></div>
    <div id='ashe' class="champ_a c4 elderwood hunter"></div>
    <div id='kindred' class="champ_j_k c3 spirit hunter"></div>
    <div id='warwich' class="champ_v_z c4 divine brawler hunter"></div>
    `,
    Keeper:`
    <div id='azir' class="champ_a c5 warlord emperor keeper"></div>
    <div id='elise' class="champ_c_i c1 cultist keeper"></div>
    <div id='j4' class="champ_j_k c2 warlord keeper"></div>
    <div id='kennen' class="champ_j_k c3 ninja keeper"></div>
    <div id='riven' class="champ_p_t c4 dusk keeper"></div>
    `,
    Mage:`
    <div id='ahri' class="champ_a c4 spirit mage"></div>
    <div id='annie' class="champ_a c2 fortune mage"></div>
    <div id='lilia' class="champ_l_n c5 dusk mage"></div>
    <div id='lulu' class="champ_l_n c2 elderwood mage"></div>
    <div id='nami' class="champ_l_n c1 enlightened mage"></div>
    <div id='tf' class="champ_p_t c1 cultist mage"></div>
    <div id='veigar' class="champ_v_z c3 elderwood mage"></div>
    `,
    Mystic:`
    <div id='cassiopeia' class="champ_c_i c4 dusk mystic"></div>
    <div id='janna' class="champ_j_k c2 enlightened mystic"></div>
    <div id='shen' class="champ_p_t c4 ninja adept mystic"></div>
    <div id='yuumi' class="champ_v_z c3 spirit mystic"></div>
    <div id='zilean' class="champ_v_z c5 cultist mystic"></div>
    `,
    Shade:`
    <div id='evelynn' class="champ_c_i c3 cultist shade"></div>
    <div id='kayn' class="champ_j_k c5 tormented shade"></div>
    <div id='zed' class="champ_v_z c2 ninja shade"></div>
    `,
    Sharpshooter:`
    <div id='jhin' class="champ_j_k c4 cultist sharpshooter"></div>
    <div id='jinx' class="champ_j_k c3 fortune sharpshooter"></div>
    <div id='nid' class="champ_l_n c1 warlord sharpshooter"></div>
    <div id='teemo' class="champ_p_t c2 spirit sharpshooter"></div>
    <div id='vayne' class="champ_v_z c1 dusk sharpshooter"></div>
    `,
    Vanguard:`
    <div id='aatrox' class="champ_a c4 cultist vanguard"></div>
    <div id='garen' class="champ_c_i c1 warlord vanguard"></div>
    <div id='hecarim' class="champ_c_i c2 elderwood vanguard"></div>
    <div id='sejuani' class="champ_p_t c4 fortune vanguard "></div>
    <div id='thresh' class="champ_p_t c2 dusk vanguard"></div>
    <div id='wukong' class="champ_v_z c1 divine vanguard"></div>
    `,
}




function Cost1() {
    champ.innerHTML = Champ.Cost1
}
function Cost2() {
    champ.innerHTML = Champ.Cost2
}
function Cost3() {
    champ.innerHTML = Champ.Cost3
}
function Cost4() {
    champ.innerHTML = Champ.Cost4
}
function Cost5() {
    champ.innerHTML = Champ.Cost5
}
function Reset() {
    champ.innerHTML = Champ.Reset
}
function Cultist() {
    champ.innerHTML = Champ.Cultist
}
function Divine() {
    champ.innerHTML = Champ.Divine
}
function Elderwood() {
    champ.innerHTML = Champ.Elderwood
}
function Enlightened() {
    champ.innerHTML = Champ.Enlightened
}
function Exile() {
    champ.innerHTML = Champ.Exile
}
function Fortune() {
    champ.innerHTML = Champ.Fortune
}
function Moonlight() {
    champ.innerHTML = Champ.Moonlight
}
function Ninja() {
    champ.innerHTML = Champ.Ninja
}
function Spirit() {
    champ.innerHTML = Champ.Spirit
}
function TheBoss() {
    champ.innerHTML = Champ.TheBoss
}
function Tormented() {
    champ.innerHTML = Champ.Tormented
}
function Warlord() {
    champ.innerHTML = Champ.Warlord
}
function Adept() {
    champ.innerHTML = Champ.Adept
}
function Assasin() {
    champ.innerHTML = Champ.Assasin
}
function Brawler() {
    champ.innerHTML = Champ.Brawler
}
function Dazzler() {
    champ.innerHTML = Champ.Dazzler
}
function Duelist() {
    champ.innerHTML = Champ.Duelist
}
function Emperor() {
    champ.innerHTML = Champ.Emperor
}
function Hunter() {
    champ.innerHTML = Champ.Hunter
}
function Keeper() {
    champ.innerHTML = Champ.Keeper
}
function Mage() {
    champ.innerHTML = Champ.Mage
}
function Mystic() {
    champ.innerHTML = Champ.Mystic
}
function Shade() {
    champ.innerHTML = Champ.Shade
}
function Sharpshooter() {
    champ.innerHTML = Champ.Sharpshooter
}
function Vanguard() {
    champ.innerHTML = Champ.Vanguard
}